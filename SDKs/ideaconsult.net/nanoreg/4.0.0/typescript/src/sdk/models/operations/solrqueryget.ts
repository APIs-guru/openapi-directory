import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SolrqueryGetWtEnum {
    Json = "json",
    Xml = "xml"
}


export class SolrqueryGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wt" })
  wt?: SolrqueryGetWtEnum;
}


export class SolrqueryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SolrqueryGetQueryParams;
}


export class SolrqueryGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  solrResponse?: shared.SolrResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

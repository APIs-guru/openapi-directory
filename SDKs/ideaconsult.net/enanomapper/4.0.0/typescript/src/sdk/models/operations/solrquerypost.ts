import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SolrqueryPostWtEnum {
    Json = "json",
    Xml = "xml"
}


export class SolrqueryPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wt" })
  wt?: SolrqueryPostWtEnum;
}


export class SolrqueryPostRequestBodyParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fl" })
  fl?: string[];

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;
}


export class SolrqueryPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facet" })
  facet?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: SolrqueryPostRequestBodyParams;
}


export class SolrqueryPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SolrqueryPostQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SolrqueryPostRequestBody;
}


export class SolrqueryPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  solrResponse?: shared.SolrResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

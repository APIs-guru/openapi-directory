import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SolrqueryPostWtEnum {
    Json = "json"
,    Xml = "xml"
}


export class SolrqueryPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=wt" })
  wt?: SolrqueryPostWtEnum;
}


export class SolrqueryPostRequestBodyParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=fl" })
  fl?: string[];

  @Metadata({ data: "json, name=rows" })
  rows?: number;
}


export class SolrqueryPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=facet" })
  facet?: Map<string, any>;

  @Metadata({ data: "json, name=params" })
  params?: SolrqueryPostRequestBodyParams;
}


export class SolrqueryPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SolrqueryPostQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SolrqueryPostRequestBody;
}


export class SolrqueryPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  solrResponse?: shared.SolrResponse;

  @Metadata()
  statusCode: number;
}

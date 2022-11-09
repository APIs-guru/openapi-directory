import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SolrResponseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=docs" })
  docs?: Map<string, any>[];

  @Metadata({ data: "json, name=maxScore" })
  maxScore?: number;

  @Metadata({ data: "json, name=numFound" })
  numFound?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;
}


export class SolrResponseResponseHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=QTime" })
  qTime?: number;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=zkConnected" })
  zkConnected?: boolean;
}


export class SolrResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: SolrResponseResponse;

  @Metadata({ data: "json, name=responseHeader" })
  responseHeader?: SolrResponseResponseHeader;
}

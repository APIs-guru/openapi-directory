import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SolrResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=docs" })
  docs?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=maxScore" })
  maxScore?: number;

  @SpeakeasyMetadata({ data: "json, name=numFound" })
  numFound?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}


export class SolrResponseResponseHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QTime" })
  qTime?: number;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=zkConnected" })
  zkConnected?: boolean;
}


export class SolrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: SolrResponseResponse;

  @SpeakeasyMetadata({ data: "json, name=responseHeader" })
  responseHeader?: SolrResponseResponseHeader;
}

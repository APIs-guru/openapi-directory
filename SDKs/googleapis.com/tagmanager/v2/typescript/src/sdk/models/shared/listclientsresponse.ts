import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Client } from "./client";


export class ListClientsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=client", elemType: shared.Client })
  client?: Client[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

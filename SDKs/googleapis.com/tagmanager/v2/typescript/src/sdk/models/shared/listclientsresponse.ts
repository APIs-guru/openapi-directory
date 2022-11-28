import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";



export class ListClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client", elemType: Client })
  client?: Client[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

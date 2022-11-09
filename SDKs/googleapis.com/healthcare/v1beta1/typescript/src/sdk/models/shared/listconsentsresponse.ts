import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Consent } from "./consent";


export class ListConsentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consents", elemType: shared.Consent })
  consents?: Consent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

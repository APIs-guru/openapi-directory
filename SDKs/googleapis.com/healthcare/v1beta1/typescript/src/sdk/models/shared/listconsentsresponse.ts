import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";



export class ListConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consents", elemType: Consent })
  consents?: Consent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

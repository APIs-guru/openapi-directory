import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";



// Contact
/** 
 * A person or group that can be used as a creator or a contact.
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptCommands", elemType: Command })
  acceptCommands?: Command[];

  @SpeakeasyMetadata({ data: "json, name=acceptTypes" })
  acceptTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrls" })
  imageUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=sharingFeatures" })
  sharingFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=speakableName" })
  speakableName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

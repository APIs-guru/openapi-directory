import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Command } from "./command";


// Contact
/** 
 * A person or group that can be used as a creator or a contact.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptCommands", elemType: shared.Command })
  acceptCommands?: Command[];

  @Metadata({ data: "json, name=acceptTypes" })
  acceptTypes?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageUrls" })
  imageUrls?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=sharingFeatures" })
  sharingFeatures?: string[];

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=speakableName" })
  speakableName?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

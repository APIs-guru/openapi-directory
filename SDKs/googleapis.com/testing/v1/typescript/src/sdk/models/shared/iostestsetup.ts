import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileReference } from "./filereference";
import { IosDeviceFile } from "./iosdevicefile";
import { IosDeviceFile } from "./iosdevicefile";


// IosTestSetup
/** 
 * A description of how to set up an iOS device prior to running the test.
**/
export class IosTestSetup extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalIpas", elemType: shared.FileReference })
  additionalIpas?: FileReference[];

  @Metadata({ data: "json, name=networkProfile" })
  networkProfile?: string;

  @Metadata({ data: "json, name=pullDirectories", elemType: shared.IosDeviceFile })
  pullDirectories?: IosDeviceFile[];

  @Metadata({ data: "json, name=pushFiles", elemType: shared.IosDeviceFile })
  pushFiles?: IosDeviceFile[];
}

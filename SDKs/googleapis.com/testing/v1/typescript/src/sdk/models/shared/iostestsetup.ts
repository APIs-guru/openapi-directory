import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { IosDeviceFile } from "./iosdevicefile";



// IosTestSetup
/** 
 * A description of how to set up an iOS device prior to running the test.
**/
export class IosTestSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalIpas", elemType: FileReference })
  additionalIpas?: FileReference[];

  @SpeakeasyMetadata({ data: "json, name=networkProfile" })
  networkProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=pullDirectories", elemType: IosDeviceFile })
  pullDirectories?: IosDeviceFile[];

  @SpeakeasyMetadata({ data: "json, name=pushFiles", elemType: IosDeviceFile })
  pushFiles?: IosDeviceFile[];
}

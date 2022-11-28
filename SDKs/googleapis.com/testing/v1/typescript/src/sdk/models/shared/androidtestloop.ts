import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";



// AndroidTestLoop
/** 
 * A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
**/
export class AndroidTestLoop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appApk" })
  appApk?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=appBundle" })
  appBundle?: AppBundle;

  @SpeakeasyMetadata({ data: "json, name=appPackageId" })
  appPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=scenarioLabels" })
  scenarioLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=scenarios" })
  scenarios?: number[];
}

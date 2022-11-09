import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";


// AndroidTestLoop
/** 
 * A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
**/
export class AndroidTestLoop extends SpeakeasyBase {
  @Metadata({ data: "json, name=appApk" })
  appApk?: FileReference;

  @Metadata({ data: "json, name=appBundle" })
  appBundle?: AppBundle;

  @Metadata({ data: "json, name=appPackageId" })
  appPackageId?: string;

  @Metadata({ data: "json, name=scenarioLabels" })
  scenarioLabels?: string[];

  @Metadata({ data: "json, name=scenarios" })
  scenarios?: number[];
}

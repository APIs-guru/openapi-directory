import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
/**
 * A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
**/
export declare class AndroidTestLoop extends SpeakeasyBase {
    appApk?: FileReference;
    appBundle?: AppBundle;
    appPackageId?: string;
    scenarioLabels?: string[];
    scenarios?: number[];
}

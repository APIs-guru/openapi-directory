import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateInfo } from "./certificateinfo";
/**
 * Describes an android app asset.
**/
export declare class AndroidAppAsset extends SpeakeasyBase {
    certificate?: CertificateInfo;
    packageName?: string;
}

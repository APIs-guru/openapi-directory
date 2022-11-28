import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An iOS version.
**/
export declare class IosVersion extends SpeakeasyBase {
    id?: string;
    majorVersion?: number;
    minorVersion?: number;
    supportedXcodeVersionIds?: string[];
    tags?: string[];
}

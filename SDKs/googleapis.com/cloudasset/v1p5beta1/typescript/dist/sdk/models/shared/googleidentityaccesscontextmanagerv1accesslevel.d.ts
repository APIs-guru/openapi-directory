import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1BasicLevel } from "./googleidentityaccesscontextmanagerv1basiclevel";
import { GoogleIdentityAccesscontextmanagerV1CustomLevel } from "./googleidentityaccesscontextmanagerv1customlevel";
/**
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
**/
export declare class GoogleIdentityAccesscontextmanagerV1AccessLevel extends SpeakeasyBase {
    basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;
    custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;
    description?: string;
    name?: string;
    title?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { GoogleCloudAssetV1StringValues } from "./googlecloudassetv1stringvalues";
/**
 * Represents a rule defined in an organization policy
**/
export declare class GoogleCloudAssetV1Rule extends SpeakeasyBase {
    allowAll?: boolean;
    condition?: Expr;
    denyAll?: boolean;
    enforce?: boolean;
    values?: GoogleCloudAssetV1StringValues;
}

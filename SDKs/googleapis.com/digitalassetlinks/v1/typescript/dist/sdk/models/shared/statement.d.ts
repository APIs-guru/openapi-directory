import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
**/
export declare class Statement extends SpeakeasyBase {
    relation?: string;
    source?: Asset;
    target?: Asset;
}

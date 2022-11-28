import { SpeakeasyBase } from "../../../internal/utils";
import { Css } from "./css";
/**
 * The response message for the `ListCsses` method
**/
export declare class ListCssesResponse extends SpeakeasyBase {
    csses?: Css[];
    nextPageToken?: string;
}

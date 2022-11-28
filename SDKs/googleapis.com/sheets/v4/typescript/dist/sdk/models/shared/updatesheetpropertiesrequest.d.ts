import { SpeakeasyBase } from "../../../internal/utils";
import { SheetProperties } from "./sheetproperties";
/**
 * Updates properties of the sheet with the specified sheetId.
**/
export declare class UpdateSheetPropertiesRequest extends SpeakeasyBase {
    fields?: string;
    properties?: SheetProperties;
}

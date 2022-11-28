import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export declare class TextOperatorOptions extends SpeakeasyBase {
    exactMatchWithOperator?: boolean;
    operatorName?: string;
}

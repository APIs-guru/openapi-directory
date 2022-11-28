import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1FieldType } from "./googleclouddatacatalogv1fieldtype";
/**
 * The template for an individual field within a tag template.
**/
export declare class GoogleCloudDatacatalogV1TagTemplateField extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    isRequired?: boolean;
    name?: string;
    order?: number;
    type?: GoogleCloudDatacatalogV1FieldType;
}
/**
 * The template for an individual field within a tag template.
**/
export declare class GoogleCloudDatacatalogV1TagTemplateFieldInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    isRequired?: boolean;
    order?: number;
    type?: GoogleCloudDatacatalogV1FieldType;
}

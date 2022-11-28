import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1FieldType } from "./googleclouddatacatalogv1beta1fieldtype";
/**
 * The template for an individual field within a tag template.
**/
export declare class GoogleCloudDatacatalogV1beta1TagTemplateFieldInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    isRequired?: boolean;
    order?: number;
    type?: GoogleCloudDatacatalogV1beta1FieldType;
}
/**
 * The template for an individual field within a tag template.
**/
export declare class GoogleCloudDatacatalogV1beta1TagTemplateField extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    isRequired?: boolean;
    name?: string;
    order?: number;
    type?: GoogleCloudDatacatalogV1beta1FieldType;
}

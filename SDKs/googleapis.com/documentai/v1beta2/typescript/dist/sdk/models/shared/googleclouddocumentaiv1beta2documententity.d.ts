import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta2documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta2DocumentPageAnchor } from "./googleclouddocumentaiv1beta2documentpageanchor";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";
/**
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export declare class GoogleCloudDocumentaiV1beta2DocumentEntity extends SpeakeasyBase {
    confidence?: number;
    id?: string;
    mentionId?: string;
    mentionText?: string;
    normalizedValue?: GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue;
    pageAnchor?: GoogleCloudDocumentaiV1beta2DocumentPageAnchor;
    properties?: GoogleCloudDocumentaiV1beta2DocumentEntity[];
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
    redacted?: boolean;
    textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    type?: string;
}

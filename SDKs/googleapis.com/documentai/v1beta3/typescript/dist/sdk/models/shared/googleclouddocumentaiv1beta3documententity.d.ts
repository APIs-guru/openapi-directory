import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta3documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta3DocumentPageAnchor } from "./googleclouddocumentaiv1beta3documentpageanchor";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";
/**
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentEntity extends SpeakeasyBase {
    confidence?: number;
    id?: string;
    mentionId?: string;
    mentionText?: string;
    normalizedValue?: GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue;
    pageAnchor?: GoogleCloudDocumentaiV1beta3DocumentPageAnchor;
    properties?: GoogleCloudDocumentaiV1beta3DocumentEntity[];
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
    redacted?: boolean;
    textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
    type?: string;
}

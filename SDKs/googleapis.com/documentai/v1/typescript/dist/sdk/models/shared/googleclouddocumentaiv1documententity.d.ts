import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1DocumentPageAnchor } from "./googleclouddocumentaiv1documentpageanchor";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
/**
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export declare class GoogleCloudDocumentaiV1DocumentEntity extends SpeakeasyBase {
    confidence?: number;
    id?: string;
    mentionId?: string;
    mentionText?: string;
    normalizedValue?: GoogleCloudDocumentaiV1DocumentEntityNormalizedValue;
    pageAnchor?: GoogleCloudDocumentaiV1DocumentPageAnchor;
    properties?: GoogleCloudDocumentaiV1DocumentEntity[];
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
    redacted?: boolean;
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
    type?: string;
}

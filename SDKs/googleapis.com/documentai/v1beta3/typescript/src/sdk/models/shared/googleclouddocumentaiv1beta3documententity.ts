import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta3documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta3DocumentPageAnchor } from "./googleclouddocumentaiv1beta3documentpageanchor";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";



// GoogleCloudDocumentaiV1beta3DocumentEntity
/** 
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export class GoogleCloudDocumentaiV1beta3DocumentEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionText" })
  mentionText?: string;

  @SpeakeasyMetadata({ data: "json, name=normalizedValue" })
  normalizedValue?: GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue;

  @SpeakeasyMetadata({ data: "json, name=pageAnchor" })
  pageAnchor?: GoogleCloudDocumentaiV1beta3DocumentPageAnchor;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1beta3DocumentEntity })
  properties?: GoogleCloudDocumentaiV1beta3DocumentEntity[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=redacted" })
  redacted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

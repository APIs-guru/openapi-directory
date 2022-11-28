import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta2documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta2DocumentPageAnchor } from "./googleclouddocumentaiv1beta2documentpageanchor";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";



// GoogleCloudDocumentaiV1beta2DocumentEntity
/** 
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export class GoogleCloudDocumentaiV1beta2DocumentEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionText" })
  mentionText?: string;

  @SpeakeasyMetadata({ data: "json, name=normalizedValue" })
  normalizedValue?: GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue;

  @SpeakeasyMetadata({ data: "json, name=pageAnchor" })
  pageAnchor?: GoogleCloudDocumentaiV1beta2DocumentPageAnchor;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1beta2DocumentEntity })
  properties?: GoogleCloudDocumentaiV1beta2DocumentEntity[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=redacted" })
  redacted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

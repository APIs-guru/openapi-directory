import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1DocumentPageAnchor } from "./googleclouddocumentaiv1documentpageanchor";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";



// GoogleCloudDocumentaiV1DocumentEntity
/** 
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export class GoogleCloudDocumentaiV1DocumentEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @SpeakeasyMetadata({ data: "json, name=mentionText" })
  mentionText?: string;

  @SpeakeasyMetadata({ data: "json, name=normalizedValue" })
  normalizedValue?: GoogleCloudDocumentaiV1DocumentEntityNormalizedValue;

  @SpeakeasyMetadata({ data: "json, name=pageAnchor" })
  pageAnchor?: GoogleCloudDocumentaiV1DocumentPageAnchor;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1DocumentEntity })
  properties?: GoogleCloudDocumentaiV1DocumentEntity[];

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;

  @SpeakeasyMetadata({ data: "json, name=redacted" })
  redacted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

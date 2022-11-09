import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta2documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta2DocumentPageAnchor } from "./googleclouddocumentaiv1beta2documentpageanchor";
import { GoogleCloudDocumentaiV1beta2DocumentEntity } from "./googleclouddocumentaiv1beta2documententity";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";


// GoogleCloudDocumentaiV1beta2DocumentEntity
/** 
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export class GoogleCloudDocumentaiV1beta2DocumentEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @Metadata({ data: "json, name=mentionText" })
  mentionText?: string;

  @Metadata({ data: "json, name=normalizedValue" })
  normalizedValue?: GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue;

  @Metadata({ data: "json, name=pageAnchor" })
  pageAnchor?: GoogleCloudDocumentaiV1beta2DocumentPageAnchor;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudDocumentaiV1beta2DocumentEntity })
  properties?: GoogleCloudDocumentaiV1beta2DocumentEntity[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;

  @Metadata({ data: "json, name=redacted" })
  redacted?: boolean;

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

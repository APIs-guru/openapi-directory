import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta3documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta3DocumentPageAnchor } from "./googleclouddocumentaiv1beta3documentpageanchor";
import { GoogleCloudDocumentaiV1beta3DocumentEntity } from "./googleclouddocumentaiv1beta3documententity";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";


// GoogleCloudDocumentaiV1beta3DocumentEntity
/** 
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export class GoogleCloudDocumentaiV1beta3DocumentEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @Metadata({ data: "json, name=mentionText" })
  mentionText?: string;

  @Metadata({ data: "json, name=normalizedValue" })
  normalizedValue?: GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue;

  @Metadata({ data: "json, name=pageAnchor" })
  pageAnchor?: GoogleCloudDocumentaiV1beta3DocumentPageAnchor;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentEntity })
  properties?: GoogleCloudDocumentaiV1beta3DocumentEntity[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;

  @Metadata({ data: "json, name=redacted" })
  redacted?: boolean;

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

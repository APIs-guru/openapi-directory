import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1DocumentPageAnchor } from "./googleclouddocumentaiv1documentpageanchor";
import { GoogleCloudDocumentaiV1DocumentEntity } from "./googleclouddocumentaiv1documententity";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";


// GoogleCloudDocumentaiV1DocumentEntity
/** 
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
**/
export class GoogleCloudDocumentaiV1DocumentEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @Metadata({ data: "json, name=mentionText" })
  mentionText?: string;

  @Metadata({ data: "json, name=normalizedValue" })
  normalizedValue?: GoogleCloudDocumentaiV1DocumentEntityNormalizedValue;

  @Metadata({ data: "json, name=pageAnchor" })
  pageAnchor?: GoogleCloudDocumentaiV1DocumentPageAnchor;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudDocumentaiV1DocumentEntity })
  properties?: GoogleCloudDocumentaiV1DocumentEntity[];

  @Metadata({ data: "json, name=provenance" })
  provenance?: GoogleCloudDocumentaiV1DocumentProvenance;

  @Metadata({ data: "json, name=redacted" })
  redacted?: boolean;

  @Metadata({ data: "json, name=textAnchor" })
  textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

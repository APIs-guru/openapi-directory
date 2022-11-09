import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationConfig } from "./notificationconfig";
import { FhirNotificationConfig } from "./fhirnotificationconfig";
import { SearchConfig } from "./searchconfig";
import { StreamConfig } from "./streamconfig";
import { ValidationConfig } from "./validationconfig";

export enum FhirStoreComplexDataTypeReferenceParsingEnum {
    ComplexDataTypeReferenceParsingUnspecified = "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}

export enum FhirStoreVersionEnum {
    VersionUnspecified = "VERSION_UNSPECIFIED"
,    Dstu2 = "DSTU2"
,    Stu3 = "STU3"
,    R4 = "R4"
}


// FhirStore
/** 
 * Represents a FHIR store.
**/
export class FhirStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=complexDataTypeReferenceParsing" })
  complexDataTypeReferenceParsing?: FhirStoreComplexDataTypeReferenceParsingEnum;

  @Metadata({ data: "json, name=defaultSearchHandlingStrict" })
  defaultSearchHandlingStrict?: boolean;

  @Metadata({ data: "json, name=disableReferentialIntegrity" })
  disableReferentialIntegrity?: boolean;

  @Metadata({ data: "json, name=disableResourceVersioning" })
  disableResourceVersioning?: boolean;

  @Metadata({ data: "json, name=enableUpdateCreate" })
  enableUpdateCreate?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=notificationConfigs", elemType: shared.FhirNotificationConfig })
  notificationConfigs?: FhirNotificationConfig[];

  @Metadata({ data: "json, name=searchConfig" })
  searchConfig?: SearchConfig;

  @Metadata({ data: "json, name=streamConfigs", elemType: shared.StreamConfig })
  streamConfigs?: StreamConfig[];

  @Metadata({ data: "json, name=validationConfig" })
  validationConfig?: ValidationConfig;

  @Metadata({ data: "json, name=version" })
  version?: FhirStoreVersionEnum;
}

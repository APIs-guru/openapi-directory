import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
import { FhirNotificationConfig } from "./fhirnotificationconfig";
import { SearchConfig } from "./searchconfig";
import { StreamConfig } from "./streamconfig";
import { ValidationConfig } from "./validationconfig";


export enum FhirStoreComplexDataTypeReferenceParsingEnum {
    ComplexDataTypeReferenceParsingUnspecified = "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}

export enum FhirStoreVersionEnum {
    VersionUnspecified = "VERSION_UNSPECIFIED",
    Dstu2 = "DSTU2",
    Stu3 = "STU3",
    R4 = "R4"
}


// FhirStore
/** 
 * Represents a FHIR store.
**/
export class FhirStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complexDataTypeReferenceParsing" })
  complexDataTypeReferenceParsing?: FhirStoreComplexDataTypeReferenceParsingEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultSearchHandlingStrict" })
  defaultSearchHandlingStrict?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableReferentialIntegrity" })
  disableReferentialIntegrity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableResourceVersioning" })
  disableResourceVersioning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableUpdateCreate" })
  enableUpdateCreate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationConfigs", elemType: FhirNotificationConfig })
  notificationConfigs?: FhirNotificationConfig[];

  @SpeakeasyMetadata({ data: "json, name=searchConfig" })
  searchConfig?: SearchConfig;

  @SpeakeasyMetadata({ data: "json, name=streamConfigs", elemType: StreamConfig })
  streamConfigs?: StreamConfig[];

  @SpeakeasyMetadata({ data: "json, name=validationConfig" })
  validationConfig?: ValidationConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: FhirStoreVersionEnum;
}

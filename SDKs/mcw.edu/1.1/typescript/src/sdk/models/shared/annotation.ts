import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  annotatedObjectRgdId?: number;

  @SpeakeasyMetadata()
  annotationExtension?: string;

  @SpeakeasyMetadata()
  aspect?: string;

  @SpeakeasyMetadata()
  createdBy?: number;

  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  dataSrc?: string;

  @SpeakeasyMetadata()
  evidence?: string;

  @SpeakeasyMetadata()
  geneProductFormId?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  lastModifiedBy?: number;

  @SpeakeasyMetadata()
  lastModifiedDate?: Date;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  objectName?: string;

  @SpeakeasyMetadata()
  objectSymbol?: string;

  @SpeakeasyMetadata()
  originalCreatedDate?: Date;

  @SpeakeasyMetadata()
  qualifier?: string;

  @SpeakeasyMetadata()
  refRgdId?: number;

  @SpeakeasyMetadata()
  relativeTo?: string;

  @SpeakeasyMetadata()
  rgdObjectKey?: number;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata()
  term?: string;

  @SpeakeasyMetadata()
  termAcc?: string;

  @SpeakeasyMetadata()
  withInfo?: string;

  @SpeakeasyMetadata()
  xrefSource?: string;
}

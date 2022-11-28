import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



export class Strain extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backgroundStrainRgdId?: number;

  @SpeakeasyMetadata()
  chrAltered?: string;

  @SpeakeasyMetadata()
  color?: string;

  @SpeakeasyMetadata()
  geneticStatus?: string;

  @SpeakeasyMetadata()
  genetics?: string;

  @SpeakeasyMetadata()
  imageUrl?: string;

  @SpeakeasyMetadata()
  inbredGen?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  lastStatus?: string;

  @SpeakeasyMetadata()
  lastStatusObject?: Status;

  @SpeakeasyMetadata()
  modificationMethod?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  origin?: string;

  @SpeakeasyMetadata()
  researchUse?: string;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  source?: string;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata({ elemType: Status })
  statusLog?: Status[];

  @SpeakeasyMetadata()
  strain?: string;

  @SpeakeasyMetadata()
  strainTypeName?: string;

  @SpeakeasyMetadata()
  substrain?: string;

  @SpeakeasyMetadata()
  symbol?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Qtl extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromosome?: string;

  @SpeakeasyMetadata()
  flank1RgdId?: number;

  @SpeakeasyMetadata()
  flank2RgdId?: number;

  @SpeakeasyMetadata()
  inheritanceType?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  linkageImage?: string;

  @SpeakeasyMetadata()
  lod?: number;

  @SpeakeasyMetadata()
  lodImage?: string;

  @SpeakeasyMetadata()
  mostSignificantCmoTerm?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  peakOffset?: number;

  @SpeakeasyMetadata()
  peakRgdId?: number;

  @SpeakeasyMetadata()
  pvalue?: number;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  sourceUrl?: string;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata()
  symbol?: string;

  @SpeakeasyMetadata()
  variance?: number;
}

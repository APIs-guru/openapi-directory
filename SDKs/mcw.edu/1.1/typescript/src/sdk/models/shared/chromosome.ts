import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Chromosome extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromosome?: string;

  @SpeakeasyMetadata()
  contigCount?: number;

  @SpeakeasyMetadata()
  gapCount?: number;

  @SpeakeasyMetadata()
  gapLength?: number;

  @SpeakeasyMetadata()
  genbankId?: string;

  @SpeakeasyMetadata()
  mapKey?: number;

  @SpeakeasyMetadata()
  ordinalNumber?: number;

  @SpeakeasyMetadata()
  refseqId?: string;

  @SpeakeasyMetadata()
  seqLength?: number;
}

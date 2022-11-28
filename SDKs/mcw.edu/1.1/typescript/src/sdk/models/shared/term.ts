import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TermXRef } from "./termxref";



export class Term extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accId?: string;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  createdBy?: string;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  definition?: string;

  @SpeakeasyMetadata()
  modificationDate?: Date;

  @SpeakeasyMetadata()
  obsolete?: number;

  @SpeakeasyMetadata()
  ontologyId?: string;

  @SpeakeasyMetadata()
  term?: string;

  @SpeakeasyMetadata({ elemType: TermXRef })
  xrefs?: TermXRef[];
}

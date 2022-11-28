import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatesListStates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: any[][];

  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  date?: string;

  @SpeakeasyMetadata()
  excerpt?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  lang?: string;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  sort?: number;

  @SpeakeasyMetadata()
  stateurl?: string;

  @SpeakeasyMetadata()
  tags?: string[][];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  url?: string;
}


export class StatesList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: StatesListStates, elemDepth: 2 })
  states?: StatesListStates[][];
}

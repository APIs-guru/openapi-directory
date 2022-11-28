import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RepertoirEmodifrequestRepertoireEditEnum {
    Add = "add",
    Del = "del"
}


export class RepertoirEmodifrequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=champ1" })
  champ1?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ10" })
  champ10?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ11" })
  champ11?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ12" })
  champ12?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ13" })
  champ13?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ14" })
  champ14?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ15" })
  champ15?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ16" })
  champ16?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ17" })
  champ17?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ18" })
  champ18?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ19" })
  champ19?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ2" })
  champ2?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ20" })
  champ20?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ21" })
  champ21?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ22" })
  champ22?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ23" })
  champ23?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ24" })
  champ24?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ25" })
  champ25?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ26" })
  champ26?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ27" })
  champ27?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ3" })
  champ3?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ4" })
  champ4?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ5" })
  champ5?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ6" })
  champ6?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ7" })
  champ7?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ8" })
  champ8?: string[];

  @SpeakeasyMetadata({ data: "json, name=champ9" })
  champ9?: string[];

  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "json, name=num" })
  num: string[];

  @SpeakeasyMetadata({ data: "json, name=repertoireEdit" })
  repertoireEdit: RepertoirEmodifrequestRepertoireEditEnum;

  @SpeakeasyMetadata({ data: "json, name=repertoireId" })
  repertoireId: string;
}

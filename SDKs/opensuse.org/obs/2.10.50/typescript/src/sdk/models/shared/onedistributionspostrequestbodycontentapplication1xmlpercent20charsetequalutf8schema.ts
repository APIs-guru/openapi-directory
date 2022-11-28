import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaIcon extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  width?: number;
}


export class OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8Schema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  architecture?: string[];

  @SpeakeasyMetadata({ elemType: OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaIcon })
  icon?: OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaIcon[];

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  project?: string;

  @SpeakeasyMetadata()
  reponame?: string;

  @SpeakeasyMetadata()
  repository?: string;

  @SpeakeasyMetadata()
  vendor?: string;

  @SpeakeasyMetadata()
  version?: string;
}

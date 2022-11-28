import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CriticMultimediaResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credit" })
  credit?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class CriticMultimedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: CriticMultimediaResource;
}


export class Critic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=multimedia" })
  multimedia?: CriticMultimedia;

  @SpeakeasyMetadata({ data: "json, name=seo_name" })
  seoName?: string;

  @SpeakeasyMetadata({ data: "json, name=sort_name" })
  sortName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

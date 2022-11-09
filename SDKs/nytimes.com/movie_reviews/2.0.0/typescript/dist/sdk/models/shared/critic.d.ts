import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CriticMultimediaResource extends SpeakeasyBase {
    credit?: string;
    height?: number;
    src?: string;
    type?: string;
    width?: number;
}
export declare class CriticMultimedia extends SpeakeasyBase {
    resource?: CriticMultimediaResource;
}
export declare class Critic extends SpeakeasyBase {
    bio?: string;
    displayName?: string;
    multimedia?: CriticMultimedia;
    seoName?: string;
    sortName?: string;
    status?: string;
}

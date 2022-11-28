import { SpeakeasyBase } from "../../../internal/utils";
import { SubtitleDeliveryMethodEnum } from "./subtitledeliverymethodenum";
import { MediaStreamTypeEnum } from "./mediastreamtypeenum";
/**
 * Class MediaStream.
**/
export declare class MediaStream extends SpeakeasyBase {
    aspectRatio?: string;
    averageFrameRate?: number;
    bitDepth?: number;
    bitRate?: number;
    channelLayout?: string;
    channels?: number;
    codec?: string;
    codecTag?: string;
    codecTimeBase?: string;
    colorPrimaries?: string;
    colorRange?: string;
    colorSpace?: string;
    colorTransfer?: string;
    comment?: string;
    deliveryMethod?: SubtitleDeliveryMethodEnum;
    deliveryUrl?: string;
    displayTitle?: string;
    height?: number;
    index?: number;
    isAvc?: boolean;
    isAnamorphic?: boolean;
    isDefault?: boolean;
    isExternal?: boolean;
    isExternalUrl?: boolean;
    isForced?: boolean;
    isInterlaced?: boolean;
    isTextSubtitleStream?: boolean;
    language?: string;
    level?: number;
    nalLengthSize?: string;
    packetLength?: number;
    path?: string;
    pixelFormat?: string;
    profile?: string;
    realFrameRate?: number;
    refFrames?: number;
    sampleRate?: number;
    score?: number;
    supportsExternalStream?: boolean;
    timeBase?: string;
    title?: string;
    type?: MediaStreamTypeEnum;
    videoRange?: string;
    width?: number;
    localizedDefault?: string;
    localizedForced?: string;
    localizedUndefined?: string;
}
/**
 * Class MediaStream.
**/
export declare class MediaStreamInput extends SpeakeasyBase {
    aspectRatio?: string;
    averageFrameRate?: number;
    bitDepth?: number;
    bitRate?: number;
    channelLayout?: string;
    channels?: number;
    codec?: string;
    codecTag?: string;
    codecTimeBase?: string;
    colorPrimaries?: string;
    colorRange?: string;
    colorSpace?: string;
    colorTransfer?: string;
    comment?: string;
    deliveryMethod?: SubtitleDeliveryMethodEnum;
    deliveryUrl?: string;
    height?: number;
    index?: number;
    isAvc?: boolean;
    isAnamorphic?: boolean;
    isDefault?: boolean;
    isExternal?: boolean;
    isExternalUrl?: boolean;
    isForced?: boolean;
    isInterlaced?: boolean;
    language?: string;
    level?: number;
    nalLengthSize?: string;
    packetLength?: number;
    path?: string;
    pixelFormat?: string;
    profile?: string;
    realFrameRate?: number;
    refFrames?: number;
    sampleRate?: number;
    score?: number;
    supportsExternalStream?: boolean;
    timeBase?: string;
    title?: string;
    type?: MediaStreamTypeEnum;
    width?: number;
    localizedDefault?: string;
    localizedForced?: string;
    localizedUndefined?: string;
}

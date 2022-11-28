import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShortlinkResponseEtatEtat extends SpeakeasyBase {
    code?: number;
    message?: string;
    shortlink?: string;
}
export declare class ShortlinkResponseEtat extends SpeakeasyBase {
    etat?: ShortlinkResponseEtatEtat[];
}
export declare class ShortlinkResponse extends SpeakeasyBase {
    etat?: ShortlinkResponseEtat;
}

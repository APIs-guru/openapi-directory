import { AxiosInstance } from "axios";
import { Photo } from "./photo";
import { PhotoSequence } from "./photosequence";
import { PhotoSequences } from "./photosequences";
import { Photos } from "./photos";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://streetviewpublish.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    photo: Photo;
    photoSequence: PhotoSequence;
    photoSequences: PhotoSequences;
    photos: Photos;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};

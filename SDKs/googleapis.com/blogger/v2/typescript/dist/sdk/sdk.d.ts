import { AxiosInstance } from "axios";
import { Blogs } from "./blogs";
import { Comments } from "./comments";
import { Pages } from "./pages";
import { Posts } from "./posts";
import { Users } from "./users";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://blogger.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    blogs: Blogs;
    comments: Comments;
    pages: Pages;
    posts: Posts;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};

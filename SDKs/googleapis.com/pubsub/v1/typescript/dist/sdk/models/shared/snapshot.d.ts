import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A snapshot resource. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
**/
export declare class Snapshot extends SpeakeasyBase {
    expireTime?: string;
    labels?: Map<string, string>;
    name?: string;
    topic?: string;
}

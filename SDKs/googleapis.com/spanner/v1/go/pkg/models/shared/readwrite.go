package shared

type ReadWriteReadLockModeEnum string

const (
	ReadWriteReadLockModeEnumReadLockModeUnspecified ReadWriteReadLockModeEnum = "READ_LOCK_MODE_UNSPECIFIED"
	ReadWriteReadLockModeEnumPessimistic             ReadWriteReadLockModeEnum = "PESSIMISTIC"
	ReadWriteReadLockModeEnumOptimistic              ReadWriteReadLockModeEnum = "OPTIMISTIC"
)

// ReadWrite
// Message type to initiate a read-write transaction. Currently this transaction type has no options.
type ReadWrite struct {
	ReadLockMode *ReadWriteReadLockModeEnum `json:"readLockMode,omitempty"`
}
